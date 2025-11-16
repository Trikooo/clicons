import React from 'react';
import config from '../config';

interface FileDollarIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FileDollarIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/file-dollar)
 * @see {@link https://clicons.dev/icon/file-dollar}
 */
const FileDollarIcon = React.forwardRef<SVGSVGElement, FileDollarIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.0007 9.90909V7.81818C20.0007 6.12494 20.0007 5.27832 19.7327 4.60214C19.3019 3.5151 18.3909 2.65765 17.2359 2.2522C16.5174 2 15.6179 2 13.8188 2C10.6705 2 9.09624 2 7.83897 2.44135C5.81774 3.15088 4.22342 4.65142 3.46954 6.55375C3.00061 7.73706 3.00061 9.21865 3.00061 12.1818V14.7273C3.00061 17.7966 3.00061 19.3313 3.84831 20.3971C4.09119 20.7025 4.37923 20.9736 4.70368 21.2022C5.83607 22 7.46667 22 10.7279 22H11.5007C12.0353 22 13.0344 22 13.5007 21.9972M3.00061 12C3.00061 10.159 4.49299 8.66667 6.33394 8.66667C6.99972 8.66667 7.78464 8.78333 8.43197 8.60988C9.00712 8.45576 9.45637 8.00652 9.61048 7.43136C9.78393 6.78404 9.66727 5.99912 9.66727 5.33333C9.66727 3.49238 11.1597 2 13.0007 2'
    }
  ],
  [
    'path',
    {
      d: 'M20.7527 15.8111C20.8576 14.5466 18.9229 13.5141 17.4443 14.2069C15.5973 15.0722 15.7584 17.2594 18.0395 17.3751C19.0546 17.4265 19.9425 17.3169 20.5459 17.9708C21.1493 18.6248 21.4108 20.2901 19.6322 20.8553C17.8535 21.4204 15.9996 20.4125 15.9996 19.1831M18.4707 13V13.9777M18.4707 21.2204V22'
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

FileDollarIcon.displayName = 'FileDollarIcon';
export default FileDollarIcon;
