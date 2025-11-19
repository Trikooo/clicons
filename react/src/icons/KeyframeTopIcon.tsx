import React from 'react';
import config from '../config';

interface KeyframeTopIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KeyframeTopIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/keyframe-top)
 * @see {@link https://clicons.dev/icon/keyframe-top}
 */
const KeyframeTopIcon = React.forwardRef<SVGSVGElement, KeyframeTopIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.3091 18.9975C12.7049 19.6658 12.4029 20 12 20C11.5971 20 11.2951 19.6658 10.6909 18.9975L9.20516 17.3537C8.40172 16.4649 8 16.0205 8 15.5C8 14.9795 8.40172 14.5351 9.20515 13.6463L10.6909 12.0025C11.2951 11.3342 11.5971 11 12 11C12.4029 11 12.7049 11.3342 13.3091 12.0025L14.7948 13.6463C15.5983 14.5351 16 14.9795 16 15.5C16 16.0205 15.5983 16.4649 14.7948 17.3537L13.3091 18.9975Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 8V4M21 4L3 4'
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

KeyframeTopIcon.displayName = 'KeyframeTopIcon';
export default KeyframeTopIcon;
