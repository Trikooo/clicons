import React from 'react';
import config from '../config';

interface LinkBackwardIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LinkBackwardIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/link-backward)
 * @see {@link https://clicons.dev/icon/link-backward}
 */
const LinkBackwardIcon = React.forwardRef<SVGSVGElement, LinkBackwardIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 8.5H10.5V4.69635C10.5 4.31176 10.1882 4 9.80365 4C9.61002 4 9.42513 4.08062 9.29338 4.22252L3.34023 10.6336C3.12154 10.8691 3 11.1786 3 11.5C3 11.8214 3.12154 12.1309 3.34023 12.3664L9.29338 18.7775C9.42513 18.9194 9.61002 19 9.80365 19C10.1882 19 10.5 18.6882 10.5 18.3037V14.5C16.0544 14.5 19.0531 18.5162 19.808 19.6847C19.9326 19.8776 20.1429 20 20.3725 20C20.7191 20 21 19.7191 21 19.3725V18.5C21 12.9772 16.5228 8.5 11 8.5Z'
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

LinkBackwardIcon.displayName = 'LinkBackwardIcon';
export default LinkBackwardIcon;
