import React from 'react';
import config from '../config';

interface TextItalicSlashIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextItalicSlashIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-italic-slash)
 * @see {@link https://clicons.dev/icon/text-italic-slash}
 */
const TextItalicSlashIcon = React.forwardRef<SVGSVGElement, TextItalicSlashIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 20.001H5'
    }
  ],
  [
    'path',
    {
      d: 'M3 3L21 21'
    }
  ],
  [
    'path',
    {
      d: 'M19 7C19 6.36778 19 5.95381 18.9194 5.6768C18.7518 5.10062 18.3066 4.60428 17.7541 4.37789C17.4886 4.26905 17.1885 4.23819 16.5884 4.17648C15.1695 4.03054 13.3874 4 12 4H8'
    }
  ],
  [
    'path',
    {
      d: 'M12 4L11.2 7.20003M8 20.0008L10.4001 10.4001'
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

TextItalicSlashIcon.displayName = 'TextItalicSlashIcon';
export default TextItalicSlashIcon;
