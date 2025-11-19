import React from 'react';
import config from '../config';

interface KeyframeRemoveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KeyframeRemoveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/keyframe-remove)
 * @see {@link https://clicons.dev/icon/keyframe-remove}
 */
const KeyframeRemoveIcon = React.forwardRef<SVGSVGElement, KeyframeRemoveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.70914 7.78222C7.76637 6.59403 8.29499 5.99994 9 5.99994C9.70501 5.99994 10.2336 6.59403 11.2909 7.78222L13.891 10.7044C15.297 12.2846 16 13.0747 16 13.9999C16 14.9252 15.297 15.7153 13.891 17.2955L11.2909 20.2177C10.2336 21.4058 9.70501 21.9999 9 21.9999C8.29499 21.9999 7.76637 21.4058 6.70914 20.2177L4.10902 17.2955C2.70301 15.7153 2 14.9252 2 13.9999C2 13.0747 2.70301 12.2846 4.10902 10.7044L6.70914 7.78222Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 4.99994H22'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

KeyframeRemoveIcon.displayName = 'KeyframeRemoveIcon';
export default KeyframeRemoveIcon;
