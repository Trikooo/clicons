import React from 'react';
import config from '../config';

interface KeyframeAddIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KeyframeAddIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/keyframe-add)
 * @see {@link https://clicons.dev/icon/keyframe-add}
 */
const KeyframeAddIcon = React.forwardRef<SVGSVGElement, KeyframeAddIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.70914 7.78228C7.76637 6.59409 8.29499 6 9 6C9.70501 6 10.2336 6.59409 11.2909 7.78228L13.891 10.7045C15.297 12.2847 16 13.0747 16 14C16 14.9253 15.297 15.7153 13.891 17.2955L11.2909 20.2177C10.2336 21.4059 9.70501 22 9 22C8.29499 22 7.76637 21.4059 6.70914 20.2177L4.10902 17.2955C2.70301 15.7153 2 14.9253 2 14C2 13.0747 2.70301 12.2847 4.10902 10.7045L6.70914 7.78228Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 9L18.5 2M15 5.5H22'
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

KeyframeAddIcon.displayName = 'KeyframeAddIcon';
export default KeyframeAddIcon;
