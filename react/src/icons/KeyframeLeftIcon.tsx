import React from 'react';
import config from '../config';

interface KeyframeLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KeyframeLeftIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/keyframe-left)
 * @see {@link https://clicons.dev/icon/keyframe-left}
 */
const KeyframeLeftIcon = React.forwardRef<SVGSVGElement, KeyframeLeftIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.9975 10.6909C19.6658 11.2951 20 11.5971 20 12C20 12.4029 19.6658 12.7049 18.9975 13.3091L17.3537 14.7948C16.4649 15.5983 16.0205 16 15.5 16C14.9795 16 14.5351 15.5983 13.6463 14.7948L12.0025 13.3091C11.3342 12.7049 11 12.4029 11 12C11 11.5971 11.3342 11.2951 12.0025 10.6909L13.6463 9.20516C14.5351 8.40172 14.9795 8 15.5 8C16.0205 8 16.4649 8.40172 17.3537 9.20515L18.9975 10.6909Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 12H4M4 3L4 21'
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
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
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

KeyframeLeftIcon.displayName = 'KeyframeLeftIcon';
export default KeyframeLeftIcon;
